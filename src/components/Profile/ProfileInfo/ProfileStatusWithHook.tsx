import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;