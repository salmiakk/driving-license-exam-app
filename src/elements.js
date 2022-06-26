import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.light};
`;

export const PageBackground = styled.div`
  background-color: ${({ theme }) => theme.light};
  padding-top: 40px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const StyledFooter = styled.footer`
  margin-top: 100px;
`;

export const Container = styled.div`
  margin-bottom: 40px;
  ${({ mb_0 }) => mb_0 && "margin-bottom: 0;"};
  width: 100%;
  max-width: ${({ theme }) => theme.pageMaxWidth};
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  background: ${({ theme }) => theme.white};
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.gray400};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  text-align: left;
  ${({ center }) => center && "text-align: center;"}
  ${props =>
    props.transparent &&
    css`
      background: transparent;
      border: none;
      box-shadow: none;
    `};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (${({ theme }) => theme.tablet}) {
    flex-direction: row;
  }
  ${({ center }) => center && "text-align: center;"}
  ${({ right }) => right && "text-align: right;"}
  ${({ mt10 }) => mt10 && "margin-top: 100px;"};
  ${({ mtAuto }) => mtAuto && "margin-top: auto;"};
  ${({ mt }) => mt && "margin-top: 15px;"};
  ${({ mb }) => mb && "margin-bottom: 15px;"};
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  background-color: ${({ light }) => light && "lightgray"};
  ${({ center }) => center && "text-align: center;"}
  ${({ right }) => right && "text-align: right;"}
  @media (${({ theme }) => theme.tablet}) {
    padding-right: ${({ pr }) => pr && "5px"};
    padding-left: ${({ pl }) => pl && "5px"};
  }
  ${({ between }) => between && "justify-content: space-between;"};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `};
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};
`;