import styled from "styled-components";

const DividerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 74px;
    padding: 24px;
    color: #c3c3c6;
    font-size: 15px;
    line-height: 20px;
`;

const Line = styled.div`
    flex: 1;
    height: 1px;
    background: #c3c3c6;
`;

type Props = {
    year: number;
};

const YearDivider = ({ year }: Props) => {
    return (
        <DividerWrapper>
            <Line />
            <div>{year}</div>
            <Line />
        </DividerWrapper>
    );
};

export default YearDivider;
