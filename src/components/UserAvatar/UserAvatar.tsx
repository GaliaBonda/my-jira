import React from 'react';
import './useravatar.scss';

interface Props {
    color: string;
    userName: string;
    userSurname: string;
};

export default function UserAvatar(props: Props) {
    const { color, userName, userSurname } = props;

    return (<div className="avatar ticket__avatar" style={{ backgroundColor: color }}>
        <p className="avatar__text">{userName[0]}{userSurname[0]}</p>
    </div>);
}