/* eslint-disable import/no-anonymous-default-export */
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Image, StyledParagraph, Wrapper } from "./styled";
import MinhVan from "./MinhVan.jpg";
import './style.css'

export default () => (
    <Container>
        <Header title="SINH VIÊN THỰC HIỆN" />
        <Section
            title="Nguyễn Minh Văn"
            body={
                <>
                    <Wrapper>
                        <Image src={MinhVan} alt="Nguyễn Minh Văn avatar" />
                        <StyledParagraph>
                            <p className="context">Họ và tên: Nguyễn Minh Văn</p>
                            <p className="context">MSSV: 45.01.104.273</p>
                            <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
                            <p className="context">Học phần: Công nghệ Web</p>
                        </StyledParagraph>
                    </Wrapper>
                    
                </>
            }
        />
    </Container>
);
