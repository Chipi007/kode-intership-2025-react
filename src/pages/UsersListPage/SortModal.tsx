import { createPortal } from "react-dom";
import styled from "styled-components";

import CrossIcon from "../../assets/icons/cross-icon.svg?react";
import { sortValues, SortValuesMap } from "./constants";
import { SortValues } from "../../models/types.api";

type Props = {
    value: SortValues;
    onChange: (value: SortValues) => void;
    onClose: () => void;
};

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #05051029;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const Modal = styled.div`
    position: absolute;
    background: #ffffff;
    border-radius: 24px;
    padding: 24px;
    min-width: 373px;
`;

const Title = styled.h2`
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    color: #050510;
`;

const Radio = styled.label<{ selected: boolean }>`
    display: flex;
    align-items: center;
    padding: 20px 0;
    gap: 12px;
    cursor: pointer;

    &::before {
        content: "";
        width: 20px;
        height: 20px;
        border: ${({ selected }) =>
            selected ? "6px solid #6534FF" : "2px solid #6534FF"};
        border-radius: 50%;
        background: #ffffff;
    }
`;

const Close = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #f7f7f8;
    border-radius: 50%;
    cursor: pointer;
`;

const SortModal = ({ value, onChange, onClose }: Props) => {
    return createPortal(
        <Overlay onClick={onClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Close onClick={onClose}>
                    <CrossIcon />
                </Close>
                <Title>Сортировка</Title>
                {sortValues.map((sortValue) => (
                    <Radio selected={value === sortValue} key={sortValue}>
                        <input
                            type="radio"
                            checked={value === sortValue}
                            onChange={() => onChange(sortValue)}
                            style={{ display: "none" }}
                        />
                        {SortValuesMap[sortValue]}
                    </Radio>
                ))}
            </Modal>
        </Overlay>,
        document.body
    );
};

export default SortModal;
