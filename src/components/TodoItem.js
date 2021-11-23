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
        if (e.which === 13) {
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
        }
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
                <IconButton ml="8px" icon={<CheckIcon />} {...getSubmitButtonProps()} />
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
                    <MenuItem color="blue" onClick={() => changeFocus()}
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
        >
            <ListItem key={item.id}
                isSelected={item.completed}
            >
                <HStack spacing={4}>
                    <Checkbox onChange={() => completeTodo(item.id)} checked={item.completed} />
                    <Editable
                        onSubmit={(value) => editTodo({ id: item.id, item: value, completed: false })}
                        onCancel={() => editTodo({ id: item.id, item: item.item, completed: item.completed })}
                        onChange={(value) => editTodo({ id: item.id, item: value, completed: false })}
                        onKeyDown={(e) => update(item.id, item.item, e)}
                        defaultValue={item.item}
                        isRequired={true}
                        isPreviewFocusable={false}
                        isDisabled={item.completed}
                        display="flex" flexDirection="row" flexWrap="nowrap"
                        alignItems="center" justifyContent="space-between" width="89%" >
                        <EditablePreview />
                        <EditableInput 
                            ref={inputRef}
                            isRequired={true}
                            isDisabled={item.completed}
                        />
                        <EditableControls />
                    </Editable>
                </HStack>
            </ListItem>
        </Box>
    )
}

export default TodoItem
