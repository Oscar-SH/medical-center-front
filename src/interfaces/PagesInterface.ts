import { FunctionComponent } from "react";

export interface PagesPropsInterface{
    children: FunctionComponent<{}>;
}

export interface TablesPropsInterface{
    page: number;
    text: string;
    page_size: number;
}