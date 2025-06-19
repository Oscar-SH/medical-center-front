import { PagesPropsInterface } from '../interfaces';

const HomePage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    return (
        <CmpComponent {...rest} />
    );
}

export default HomePage;