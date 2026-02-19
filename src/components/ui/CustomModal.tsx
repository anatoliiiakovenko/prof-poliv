import {Modal as AntModal, type ModalProps} from 'antd';
import {type FC, type PropsWithChildren} from 'react';
import clsx from 'clsx';

type CustomModalProps = PropsWithChildren<
    ModalProps & {
    className?: string;
    blurBackdrop?: boolean;
}
>;

export const Modal: FC<CustomModalProps> = ({
                                                children,
                                                className,
                                                blurBackdrop = true,
                                                centered = true,
                                                forceRender = true,
                                                styles,
                                                ...props
                                            }) => {
    return (
        <AntModal
            {...props}
            centered={centered}
            forceRender={forceRender}
            className={clsx(className)}
            styles={{
                ...styles,
                container: {
                    borderRadius: 16,
                  padding: '10px, 20px, 20px',
                },
                mask: {
                    background: 'rgba(16, 18, 19, 0.08)',
                    ...(blurBackdrop && { backdropFilter: 'blur(8px)' }),
                },
                title: {
                    fontSize: 20,
                    fontWeight: 600,
                }
            }}
        >
            {children}
        </AntModal>
    );
};
