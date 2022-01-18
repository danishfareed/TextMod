import React from 'react'

export const Alert = (props) => {

    return (
        <>
            {props.alert &&
            <div className=
            {`
            ${(props.alert.color == "green") ? "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800" : ""}
            ${(props.alert.color == "red") ? "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800" : ""}
            ${(props.alert.color == "yellow") ? "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800" : ""}
            p-3 mb-3 text-sm absolute top-10 right-10 rounded-lg
            `} role="alert">
                <span className="font-medium">
                    {props.alert.msg}
                </span>
            </div>
            }
        </>
    )
}
