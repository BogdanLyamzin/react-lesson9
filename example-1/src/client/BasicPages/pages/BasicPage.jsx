import React from 'react';
import PropTypes from 'prop-types';

import Title from "../components/Title";
import Text from "../components/Text";

const BasicPage = ({title, text}) => {
    return (
        <div>
            <Title title={title} />
            <Text text={text} />
        </div>
    );
};

BasicPage.propTypes = {

};

export default BasicPage;