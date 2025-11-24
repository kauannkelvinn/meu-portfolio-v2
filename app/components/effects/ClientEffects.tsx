"use client";

import Scanlines from "./Scanlines";
import DigitalRain from "./DigitalRain";
import CustomCursor from "./CustomCursor";

export default function ClientEffects() {
    return (
        <>
            <DigitalRain />
            <Scanlines />;
            <CustomCursor />
        </>

    )
}