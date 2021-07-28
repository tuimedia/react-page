import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'vpreact',
    initialState: {
        page: null,
        pageState: 'initialised',
        language: 'en_GB',
        error: null,
    },
    reducers: {
        translatedBlock: (state, action) => {
            return id => {
                const content = state.page.pageData.content;
                const row = { ...content.blocks[id] };
                if (content.langData[state.page.pageData.defaultLanguage].hasOwnProperty(row.id)) {
                  Object.assign(row, content.langData[state.page.pageData.defaultLanguage][row.id]);
                }
                if (content.langData[state.language].hasOwnProperty(row.id)) {
                  Object.assign(row, content.langData[state.language][row.id]);
                }
                return row;
              };
        },
        setPage: (state, action) => {
            state.page = action.payload;
            state.language = action.payload.pageData.defaultLanguage;
            console.log('page set and default language', action.payload);
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setPageState: (state, action) => {
            state.pageState = action.payload;
        }
    },
});
export const { setPage, setPageState, translatedBlock, setLanguage, loadGlobalComponents } = slice.actions

export default slice.reducer