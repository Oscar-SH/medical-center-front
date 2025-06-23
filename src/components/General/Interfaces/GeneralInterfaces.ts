import { Breakpoint, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface NavBarItemProps {
    label: string;
    route: string;
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
    // args: Object;
    open: boolean;
    title: string;
    // width?: Breakpoint;
    component: React.FunctionComponent<any> | null;
}