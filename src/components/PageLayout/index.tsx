import NavbarLayout from 'components/NavbarLayout';
import { ReactNode } from 'react';

function PageLayout({ content }: { content?: ReactNode }) {
    return (
        <div>
            <NavbarLayout />
            <main>{content}</main>
        </div>
    );
}

export default PageLayout;
