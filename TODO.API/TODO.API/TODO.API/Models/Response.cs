namespace TODO.API.Models
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }

        public Todo Todo { get; set; }
        public List<Todo> ListTodos { get; set; }
    }
}
