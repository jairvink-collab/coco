import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import type { CSSProperties } from "react"

interface SpinnerProps {
    size: number
    thickness: number
    color: string
    trackColor: string
    speed: number
    label: string
    style?: CSSProperties
}

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Spinner(props: SpinnerProps) {
    const {
        size = 20,
        thickness = 2,
        color = "#4a2437",
        trackColor = "rgba(74, 36, 55, 0.25)",
        speed = 0.8,
        label = "Bezig met versturen",
        style,
    } = props

    return (
        <motion.div
            role="status"
            aria-label={label}
            style={{
                ...style,
                position: "relative",
                boxSizing: "border-box",
                width: size,
                height: size,
                borderRadius: "50%",
                border: `${thickness}px solid ${trackColor}`,
                borderTopColor: color,
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        />
    )
}

addPropertyControls(Spinner, {
    size: { type: ControlType.Number, title: "Grootte", defaultValue: 20, min: 10, max: 64, unit: "px" },
    thickness: { type: ControlType.Number, title: "Dikte", defaultValue: 2, min: 1, max: 8, unit: "px" },
    color: { type: ControlType.Color, title: "Kleur", defaultValue: "#4a2437" },
    trackColor: { type: ControlType.Color, title: "Spoor", defaultValue: "rgba(74, 36, 55, 0.25)" },
    speed: { type: ControlType.Number, title: "Rondje", defaultValue: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
    label: { type: ControlType.String, title: "Label", defaultValue: "Bezig met versturen" },
})
