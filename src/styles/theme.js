import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {
                    bg: "azul.500",
                    color: "branco.500"
                }
            }
        }
    },
    colors: {
        azul: {
            500: "#0892D0"
        },
        branco: {
            500: "#FFFFFF"
        }
    }
})