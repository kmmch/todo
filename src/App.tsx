import { Helmet } from "react-helmet";
import { HeaderLayout } from "./components/templates/HeaderLayout";
import { Todo } from "./components/pages/Todo";

export default function App() {
    return (
        <>
            <Helmet title="Todo" />
            
            <HeaderLayout>
                <Todo />
            </HeaderLayout>
        </>
    );
}