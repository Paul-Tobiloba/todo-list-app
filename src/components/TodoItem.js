import React, { useRef } from 'react';
import {
    Box,
    Input,
    ListItem,
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
    IconButton,
    HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, DeleteIcon, EditIcon } from "@chakra-ui/icon"

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

    return (
        <Box>
            <ListItem key={item.id}>
                <HStack spacing={4}>
                <Checkbox onChange={() => completeTodo(item.id)} checked={item.completed} />
                <Input className={`${'todo-input'} ${item.completed ? 'completed' : ''}`}
                    size="sm"
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={item.item}
                    variant="filled"
                    opacity={item.completed ? 0.5 : 1}
                    onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                />
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="options"
                        icon={<Icon name="hamburger"/>}
                        variant="ghost"
                    />
                    <MenuList>
                        <MenuItem onClick={() => changeFocus()}
                            icon={<Icon name="edit" />}
                            command="edit">Edit</MenuItem>
                        <MenuItem onClick={() => removeTodo(item.id)}
                            icon={<Icon name="delete" />}
                            command="delete">Delete</MenuItem>
                    </MenuList>
                </Menu>
                </HStack>
            </ListItem>
        </Box>
    )
}

export default TodoItem
