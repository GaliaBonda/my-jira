import React from 'react';

type PropsType = {
    color: string;
    userName: string;
    userSurname: string;
};

export default function UserAvatar(props: PropsType) {
    return (<div className="ticket__avatar" style={{ backgroundColor: props.color }}>
        {props.userName[0]}
        {props.userSurname[0]}
    </div>);
}