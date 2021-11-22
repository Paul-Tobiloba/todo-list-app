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
import { DeleteIcon, DotIcon, EditIcon } from '../assets/icons/Icon';

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
                    <Input className={`${'todo-input'} ${item.completed ? 'completed' : ''}`}
                        size="sm"
                        ref={inputRef}
                        disabled={inputRef}
                        defaultValue={item.item}
                        variant="filled"
                        opacity={1}
                        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                    />
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="options"
                            icon={<Icon as={DotIcon} />}
                            variant="ghost"
                        />
                        <MenuList>
                            <MenuItem onClick={() => changeFocus()}
                                icon={<Icon as={EditIcon} />}
                                command="edit">Edit</MenuItem>
                            <MenuItem onClick={() => removeTodo(item.id)}
                                icon={<Icon as={DeleteIcon} />}
                                command="delete">Delete</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </ListItem>
        </Box>
    )
}

export default TodoItem
