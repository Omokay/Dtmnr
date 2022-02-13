import styled from 'styled-components';


interface SelectProps {
    options: number[],
    label: string,

}

const CustomSelect = ({options, label}: SelectProps) => {
    return (
            <Select name={label} id={label}>
                {
                    (options && options).map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                }

            </Select>
    )
};


export default CustomSelect;

const Select = styled.select`
  width: 80px;
  height:28px;
  background-color: #06080c;
  color: #ffffff;
  border: none;
  padding: 5px 16px;
  border-radius: 4px;

`;

