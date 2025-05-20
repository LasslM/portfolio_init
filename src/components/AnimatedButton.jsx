import PropTypes from "prop-types";
import classNames from "classnames";

import {ArrowRight} from "lucide-react";

function AnimatedButton({
                            children,
                            primary,
                            secondary,
                            simple_w,
                            simple_b,
                            outline,
                            rounded,
                            className,
                            ...rest
                        }) {
    const classes = classNames(
        "px-12 py-1.5 border transition-all duration-300",
        {
            "border-color-dark bg-color-dark text-color-light": primary && !outline,
            "border-color-gray bg-color-gray text-color-light": secondary && !outline,
            "text-color-light": simple_w && !outline,
            "text-color-dark": simple_b && !outline,

            "bg-white": outline,
            "text-color-dark border-color-dark bg-color-light hover:bg-color-dark hover:text-color-light": outline && primary,
            "text-gray-900 border-gray-900": outline && secondary,

            "rounded-full": rounded,
        },
        className
    );

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

export default AnimatedButton;

AnimatedButton.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    simple_w: PropTypes.bool,
    simple_b: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,

    checkVariationValue: function ({
                                       primary,
                                       secondary,
                                       simple_w,
                                       simple_b
                                   }) {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!simple_w) +
            Number(!!simple_b)
        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, or danger can be true."
            );
        }
    },
};
