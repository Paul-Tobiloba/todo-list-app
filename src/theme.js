// theme.js
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    components: {
        styles: {
            global: {
                // styles for the `body`
                body: {
                    bg: "gray.400",
                    color: "black",
                },
                // styles for the `a`
                a: {
                    color: "teal.500",
                    _hover: {
                        textDecoration: "underline",
                    },
                },
            },
            Button: {
                // 1. We can update the base styles
                baseStyle: {
                    fontWeight: "bold", // Normally, it is "semibold"
                },
                // 2. We can add a new button size or extend existing
                sizes: {
                    xl: {
                        h: "56px",
                        fontSize: "lg",
                        px: "32px",
                    },
                },
                // 3. We can add a new visual variant
                variants: {
                    "with-shadow": {
                        bg: "purple.500",
                        boxShadow: "0 0 2px 2px #efdfde",
                    },
                    // 4. We can override existing variants
                    solid: (props) => ({
                        bg: props.colorMode === "dark" ? "purple.400" : "purple.700",
                    }),
                },
            },
        },
    }}
)

export default theme