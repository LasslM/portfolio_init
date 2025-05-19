import PropTypes from "prop-types";
import classNames from "classnames";

import {ArrowRight} from "lucide-react";

function AnimatedButton({
                            children,
                            primary,
                            secondary,
                            success,
                            warning,
                            danger,
                            outline,
                            rounded,
                            className,
                            ...rest
                        }) {
    const classes = classNames(
        "px-12 py-1.5 border transition-all duration-300",
        {
            "border-color-dark bg-color-dark text-color-light": primary && !outline,
            "border-gray-900 bg-gray-900 text-white": secondary && !outline,
            "border-green-500 bg-green-500 text-white": success && !outline,
            "border-yellow-400 bg-yellow-400 text-white": warning && !outline,
            "border-red-500 bg-red-500 text-white": danger && !outline,

            "bg-white": outline,
            "text-color-dark border-color-dark bg-color-light hover:bg-color-dark hover:text-color-light": outline && primary,
            "text-gray-900 border-gray-900": outline && secondary,
            "text-green-500 border-green-500": outline && success,
            "text-yellow-500 border-yellow-400": outline && warning,
            "text-red-500 border-red-500": outline && danger,

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
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,

    checkVariationValue: function ({
                                       primary,
                                       secondary,
                                       success,
                                       warning,
                                       danger,
                                   }) {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, or danger can be true."
            );
        }
    },
};
