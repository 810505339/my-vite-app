import {useChildren} from "@vant/use";
import theme, {themeType} from "@/theme/theme";
import {Ref, ref} from "vue";

export const THEME_KEY = 'THEME_KEY'

export interface provideThemeType {
    themes: Ref<themeType>,
    updateTheme: (theme: themeType) => void
}

export function provideTheme() {
    const themes = ref(theme)
    const updateTheme = (theme: themeType) => {
        for (const Key in theme) {
            if (theme.hasOwnProperty(Key)) {
                themes.value[Key] = theme[Key]
            }
        }
    }  //修改theme
    const {linkChildren} = useChildren(THEME_KEY)
    linkChildren({themes, updateTheme})
    return themes
}
