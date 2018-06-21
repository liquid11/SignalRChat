using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public static List<Users> SignalRUsers = new List<Users>();

        public async Task SendMessage(string user, string message)
        {
            var id = Context.ConnectionId;

            if (SignalRUsers.Count(x => x.ConnectionId == id) == 0)
            {
                SignalRUsers.Add(new Users {ConnectionId = id, UserName = user});
            }

            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task SendList()
        {
//            var id = Context.ConnectionId;
//
//            if (SignalRUsers.Count(x => x.ConnectionId == id) == 0)
//            {
//                SignalRUsers.Add(new Users {ConnectionId = id, UserName = user});
//            }

            await Clients.All.SendAsync("ReceiveList", SignalRUsers);
        }
    }

    public class Users
    {
        public string ConnectionId { get; set; }
        public string UserName { get; set; }
    }
}