import React from "react"
import { JSX } from "react"

export type Project = {
    name: string,
    description: string,
    imageLink: string,
    url: string,
}

export type PageRoute = {
    name: string,
    path: string,
    element: () => React.JSX.Element
}