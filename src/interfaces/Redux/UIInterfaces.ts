import { GeneralDrawerInterface, GeneralModalInterface } from "../../components/General/Interfaces/GeneralInterfaces";

export interface UiStateInterface {
    sideBar: boolean;
    darkMode: boolean;
    openModal: GeneralModalInterface;
    openDrawer: GeneralDrawerInterface;
}