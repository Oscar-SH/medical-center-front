import { GeneralDrawerInterface, GeneralModalInterface } from "../../components/General/Interfaces";

export interface UiStateInterface {
    sideBar: boolean;
    darkMode: boolean;
    openModal: GeneralModalInterface;
    openDrawer: GeneralDrawerInterface;
}