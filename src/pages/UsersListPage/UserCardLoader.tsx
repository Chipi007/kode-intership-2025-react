import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% { transform: translateX(-60%); }
  100% { transform: translateX(100%); }
`;

const SkeletonCard = styled.div`
    display: flex;
    gap: 16px;
    padding: 6px 0;
    align-items: center;
`;

const SkeletonAvatar = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #f3f3f6;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        background: linear-gradient(
            to right,
            transparent,
            #fafafa,
            transparent
        );
        animation: ${skeletonAnimation} 2s ease infinite;
    }
`;

const SkeletonTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const SkeletonLine = styled.div`
    height: 16px;
    border-radius: 50px;
    background: #f3f3f6;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to right,
            transparent,
            #fafafa,
            transparent
        );
        animation: ${skeletonAnimation} 2s ease infinite;
    }
`;

const SkeletonLineShort = styled(SkeletonLine)`
    width: 80px;
`;

const SkeletonLineLong = styled(SkeletonLine)`
    width: 144px;
`;

const UserCardLoader = () => (
    <div>
        {Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index}>
                <SkeletonAvatar />
                <SkeletonTextBlock>
                    <SkeletonLineLong />
                    <SkeletonLineShort />
                </SkeletonTextBlock>
            </SkeletonCard>
        ))}
    </div>
);

export default UserCardLoader;
