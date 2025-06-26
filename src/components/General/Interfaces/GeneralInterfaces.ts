import { Breakpoint, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface NavBarItemProps {
    label: string;
    route: string;
    permission: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
}

export interface GeneralPropsErrorInterface {
    msg: string;
    error: boolean;
}

export interface GeneralModalInterface {
    args: Object;
    open: boolean;
    title: string;
    width?: Breakpoint;
    component: React.FunctionComponent<any> | null;
}

export interface GeneralDrawerInterface {
    open: boolean;
    title: string;
    component: React.FunctionComponent<any> | null;
}