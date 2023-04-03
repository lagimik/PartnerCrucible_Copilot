import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the learning journey for a security architect?",
        value: "What is the learning journey for a security architect?"
    },
    { text: "What are the growth opportunities for a power platform practice?", value: "What are the growth opportunities for a power platform practice?" },
    { text: "What are the main advantages of CSP?", value: "What are the main advantages of CSP?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
