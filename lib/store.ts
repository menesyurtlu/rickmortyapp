import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import characterApi from "@/lib/rnmStore/characterApi";

const rootReducer = combineReducers({
    [characterApi.reducerPath]: characterApi.reducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(characterApi.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;
