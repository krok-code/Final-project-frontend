import styled from '@emotion/styled';
import '../../shared/basicStyles/variables.scss';

export const FormStyled = styled.form`
  padding-top: 14px;
  border-top: 1px solid var(--modal-filter-form-line);
`;

export const BoxStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const SubtitleStyled = styled.p`
  letter-spacing: -0.28px;
  color: var(--modal-filters-text);
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;
