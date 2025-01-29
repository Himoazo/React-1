function HeaderComponent(props: any) {
  return (
      <>
          <h1 style={{textAlign: "center", height: "7vh"}}>{props.siteTitle}</h1>
      </>
  )
}

export default HeaderComponent