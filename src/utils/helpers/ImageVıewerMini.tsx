interface ImageViewerMiniProps {
    picture: string;
}

export const ImageViewerMini = (props: ImageViewerMiniProps) => {
    return (
        <>
            <img src={props.picture ?? ""} height="64px" width="64px" />
        </>
    );
}
