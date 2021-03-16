import styled from "@emotion/styled";

function ContentBold({children}:any){
  const StyledContent = styled.p`
    font-weight:bold;
    font-size: 30px;
    line-height: 20px;
    text-align: center;
  `;
  return <StyledContent>{children}</StyledContent>
}

function ContentLarge({children}:any){
  const StyledContentLB = styled.p`
    font-weight:normal;
    font-size: 30px;
    line-height: 20px;
  `;
  return <StyledContentLB>{children}</StyledContentLB>
}

function ContentSmall({children}:any){
  const StyledContentS = styled.p`
    font-weight:normal;
    font-size: 12px;
    line-height: 15px;
  `;
  return <StyledContentS>{children}</StyledContentS>
}

export {ContentBold, ContentSmall, ContentLarge};