# 1. 프로젝트 소개
GitHub의 Projects 기능을 클론한 Todo 어플리케이션 개발 프로젝트    

# 2. 서비스 링크
[서비스 링크]()

# 3. 사용기술
- API 개발 : 스프링 프레임워크, 
- API 배포 : AWS EC2, Nginx
- 로그인 인증 : SpringBoot intercepter, JWT
- 데이터베이스 : Mysql, Spring Data JDBC

# 4. 개발내용
- 클라이언트 로그인 성공 시 JWT 토큰 발행 후 intercepter를 통해 인증 확인 
- 클라이언트가 칸반 추가, 변경, 삭제, 이동시 시 요청 처리 후 응답하는 API 

# 5. 어려움과 해결책
## 5.1 어려움 : 클라이언트 요청 시 Cors 문제 
- 문제 : 인증 처리를 위해 인터셉터를 적용한 뒤 클라이언트가 요청할 때 Cors 문제 발생. 
- 해결책 : 클라이언트의 Origin(5050)을 서버에서 통과시키는 코드 추가. 


## 프로젝트 피드백
- DB를 root 객체로 접근하지 않고 하위 객체를 직접 접근한 점. 
    - DB 설계에 대한 충분한 고민을 한 뒤에 기능을 구현해보자. 

## Api 문서 
[Api 문서](https://github.com/codesquad-member-2020/todo-1/wiki/Todo-Group1-API-%EB%AC%B8%EC%84%9C)
