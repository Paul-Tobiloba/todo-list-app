import React, { useRef, useState } from 'react';
import {
    Box,
    Editable,
    EditablePreview,
    EditableInput,
    ListItem,
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
    IconButton,
    HStack,
    ButtonGroup,
    useEditableControls,
    useToast
} from '@chakra-ui/react';
import { CheckIcon, ClearAllIcon, DeleteIcon, DotIcon, EditIcon } from '../assets/icons/Icon';

const TodoItem = (props) => {
    const [error, setError] = useState("");

    const { item, removeTodo, editTodo, completeTodo } = props;

    const inputRef = useRef(true);
    const toast = useToast();

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const update = (id, value, e) => {
            if (value.trim() === '') {
                setError("Input cannnot be empty");
                toast({
                    title: 'Warning',
                    description: { error },
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
                });
                return;
            }
            editTodo({ id, item: value, completed: false });
            setError("");
        // }
    }


    const EditableControls = () => {
        const {
            isEditing,
            getSubmitButtonProps,
            getEditButtonProps,
            getCancelButtonProps,
        } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent="flex-end" size="sm">
                <IconButton isDisabled={
                    (inputRef.current.value.trim() === '')
                } ml="8px" icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<ClearAllIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>) : (
            <Menu justifyContent="flex-end" size="sm">
                <MenuButton
                    as={IconButton}
                    aria-label="options"
                    icon={<Icon as={DotIcon} />}
                    variant="ghost"
                />
                <MenuList>
                    <MenuItem isDisabled={item.completed} color="blue" onClick={() => changeFocus()}
                        icon={<Icon as={EditIcon} />}
                        {...getEditButtonProps()}
                        command="edit">Edit</MenuItem>
                    <MenuItem color="red" onClick={() => removeTodo(item.id)}
                        icon={<Icon as={DeleteIcon} />}
                        command="delete">Delete</MenuItem>
                </MenuList>
            </Menu>
        );
    }

    return (
        <Box maxW="sm"
            border="1px solid"
            borderColor="gray.200"
            rounded="lg"
            p="4"
            my="1"
            bg="white"
            shadow="md"
            alignItems="center"
            style={{
                backgroundColor: item.completed ? 'rgb(41, 216, 80)' : '#fff',
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? '#111' : '#000',
                opacity: item.completed ? 0.7 : 1,
            }}>
            <ListItem key={item.id}
                isSelected={item.completed}
                isTruncated={true}
            >
                <HStack spacing={4}>
                    <label>
                        <Checkbox outline="none" verticalAlign="center" colorScheme="green" size="lg" onChange={() => completeTodo(item.id)} checked={item.checked} />
                    </label>
                    <Editable
                        // onSubmit={(value) => editTodo({ id: item.id, item: value, completed: false })}
                        onSubmit={(value, e) => update(item.id, value, e)}
                        onCancel={() => editTodo({ id: item.id, item: item.item, completed: item.completed })}
                        onChange={(value) => editTodo({ id: item.id, item: value, completed: false })}
                        onKeyDown={(e) => update(item.id, item.item, e)}
                        defaultValue={item.item}
                        checked={item.completed}
                        isTruncated={true}
                        isRequired={true}
                        isPreviewFocusable={false}
                        isDisabled={item.completed}
                        submitOnBlur={false}
                        display="flex" flexDirection="row" flexWrap="nowrap"
                        alignItems="center" justifyContent="space-between" width="89%" >
                        <EditablePreview />
                        <EditableInput
                            ref={inputRef}
                            isRequired
                            isDisabled={item.completed}
                            // {...(inputRef?.current?.value?.trim() === '' && {
                            //     boxShadow: '0 0 0 1px red',
                            //     borderColor: 'red',
                            // })}
                            // {...(inputRef?.current?.value?.trim() === '', {
                            //     required: {
                            //         value: true,
                            //         errorMessage: 'Input cannnot be empty',
                            //     }
                            // })}
                        />
                        <EditableControls />
                    </Editable>
                </HStack>
            </ListItem>
        </Box>
    )
}

export default TodoItem
