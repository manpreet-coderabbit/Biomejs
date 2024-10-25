function TestComponent() {
    // ruleid:react-dangerouslysetinnerhtml
    return <div dangerouslySetInnerHTML={createMarkup()} />;
    <a href='http://external.link' target='_blank'>child</a>
}

function OkComponent() {
    // OK
    return {__html: 'Первый &middot; Второй'};
}