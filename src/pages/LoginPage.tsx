import { PagesPropsInterface } from '../interfaces';

const LoginPage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    return (
        <CmpComponent {...rest} />
    );
}

export default LoginPage;