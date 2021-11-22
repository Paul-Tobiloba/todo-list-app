import React, { useRef } from 'react';
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
    useEditableControls
} from '@chakra-ui/react';
import { CheckIcon, ClearAllIcon, DeleteIcon, DotIcon, EditIcon } from '../assets/icons/Icon';

const TodoItem = (props) => {
    const { item, removeTodo, editTodo, completeTodo } = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const update = (id, value, e) => {
        if (e.which === 13) {
            editTodo({ id, item: value });
            inputRef.current.disabled = true;
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
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
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
                    <MenuItem onClick={() => changeFocus()}
                        icon={<Icon as={EditIcon} />}
                        {...getEditButtonProps()}
                        command="edit">Edit</MenuItem>
                    <MenuItem onClick={() => removeTodo(item.id)}
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
                    {/* <Input className={`${'todo-input'} ${item.completed ? 'completed' : ''}`}
                        size="sm"
                        ref={inputRef}
                        disabled={inputRef}
                        defaultValue={item.item}
                        variant="filled"
                        opacity={1}
                        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                    /> */}
                    <Editable display="flex" flexDirection="row" flexWrap="nowrap" alignItems="center" justifyContent="space-between" width="89%" >
                        <EditablePreview
                            isEditing={false}
                            ref={inputRef}
                            defaultValue={item.item}

                        />
                        <EditableInput
                            display="flex"

                            ref={inputRef}
                            defaultValue={item.item}
                            onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                        />
                        <EditableControls />
                    </Editable>
                    

                </HStack>
            </ListItem>
        </Box>
    )
}

export default TodoItem
