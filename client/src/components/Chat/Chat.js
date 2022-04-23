 <Grid container 
      spacing={2}
      width="40vw"
      height="80vh"
      display="flex"
      direction='column'
      alignItems="center"
      justifyContent="space-between"
      paddingTop={2}
      >
        <Grid>
            <Typography component="h1" variant="h4">
              Welcome {user} to {room} Room
            </Typography>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component="h1" variant="h6" align='center'>Chat Room Guidelines</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Do not verbally abuse, attack, embarrass, or threaten anyone else in the chat room, no matter
                what they might say to you.
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Grid>
          <Grid overflow='hidden'>

            <ScrollToBottom className="message-container">
              {messageList.map((messageContent) => {
                return (
                  <div
                  className="message"
                  id={user === messageContent.author ? "you" : "other"}
                >
                        <Box mb={2}
                        display="flex"
                        flexDirection="column"
                        style={{
                          border: "1px solid black",
                          overflow: "hidden",
                          overflowY: "scroll" // added scroll
                        }}>
                          <Card sx={{ width: 300 , padding:0.5}}>
                            <CardActionArea>
                              <Chip
                                avatar={<Avatar alt="Natacha" src={messageContent.img} />}
                                label={messageContent.author}
                                variant="outlined"
                              />
                              <CardContent>
                                <Typography component="h8" variant="h8">sent at: {messageContent.time}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {messageContent.message}
                                </Typography>
                              </CardContent>
                            </CardActionArea>

                          </Card>
                          </Box>
                  </div>
                );
              })}
            </ScrollToBottom>
            
          </Grid>
      
        <Grid item display='flex' justifyContent="space-between" sx={{ width: 600}}>
            <TextField
              type="text"

              value={currentMessage}
              inputProps={{style: {width: 400, height: 5}}} 
              placeholder="Write your message here"
              onChange={(event) => {
              setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <Button onClick={sendMessage} size='medium' variant="contained" endIcon={<SendIcon />}>
            Send
            </Button>
        </Grid>

    </Grid>