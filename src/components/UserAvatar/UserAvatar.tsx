import React from 'react';
import './useravatar.scss';

type PropsType = {
    color: string;
    userName: string;
    userSurname: string;
};

export default function UserAvatar(props: PropsType) {
    return (<div className="avatar ticket__avatar" style={{ backgroundColor: props.color }}>
        <p className="avatar__text">{props.userName[0]}{props.userSurname[0]}</p>

    </div>);
}