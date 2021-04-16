import React, {Children, ReactElement, ReactNode} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

type Props = {
    className?: string;
    animation: string;
    appear?: number;
    enter?: number;
    leave?: number;
    children: (ReactElement | null) | Array<ReactElement | null>;
    childFactory?: Function;
    component?: ReactNode;
};

/**
 * Animation component
 */
export default function Animation(props: Props) {
    const {
        className = "",
        animation = "fade",
        appear = 500,
        enter = 500,
        leave = 300,
        children,
        childFactory,
        ...restProps
    } = props;
    const childs = Children.toArray(children);

    return (
        <TransitionGroup className={className} childFactory={childFactory} {...restProps}>
            {childs.map((child) => (
                    <CSSTransition
                        classNames={animation}
                        timeout={{
                            appear: appear,
                            enter: enter,
                            exit: leave,
                        }}
                    >
                        {child}
                    </CSSTransition>
                )
            )}
        </TransitionGroup>
    );
}