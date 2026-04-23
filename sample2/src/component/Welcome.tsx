type WelcomeProps = {
    name: string;
};

export default function Welcome(props: WelcomeProps) {
    return <h1>Hello, {props.name}</h1>;
}