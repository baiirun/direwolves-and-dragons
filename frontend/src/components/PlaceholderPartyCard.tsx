import React from 'react';

type State = {
    name: string;
    tagLine: string;
};

const PlaceholderPartyCard = () => {
    const [party, setParty] = React.useState<State>({
        name: '',
        tagLine: '',
    });

    return <>I'm a placeholder party card when editing</>;
};

export default PlaceholderPartyCard;
