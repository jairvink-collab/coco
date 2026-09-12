import type { ComponentType } from "react"

// De rail heeft elementId "reviews-rail" op het canvas, dus we kunnen hem
// direct in de DOM opzoeken. Zo blijven de pijlen en de rail canvas-native.
const RAIL_ID = "reviews-rail"

function getRail(): HTMLElement | null {
    if (typeof document === "undefined") return null
    return document.getElementById(RAIL_ID)
}

function scrollRail(direction: number) {
    const rail = getRail()
    if (!rail) return
    const step = Math.min(rail.clientWidth * 0.8, 520)
    rail.scrollBy({ left: direction * step, behavior: "smooth" })
}

export function withVorigeReview(Component): ComponentType {
    return (props) => {
        return (
            <Component
                {...props}
                onClick={(event) => {
                    props.onClick?.(event)
                    scrollRail(-1)
                }}
            />
        )
    }
}

export function withVolgendeReview(Component): ComponentType {
    return (props) => {
        return (
            <Component
                {...props}
                onClick={(event) => {
                    props.onClick?.(event)
                    scrollRail(1)
                }}
            />
        )
    }
}
