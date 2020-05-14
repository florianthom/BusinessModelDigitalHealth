using Jwt_Identity.Models.Canvas.Sections;
using Jwt_Identity.Models.Pattern;
using Jwt_Identity.Models.User;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Models.Canvas
{
    public class BaseCanvas/* : Base*/
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }




        public int ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        // dont have to be bind to a pattern, but it can be
        // thats why foreign key is nullable
        public int? BasePatternId { get; set; }
        public BasePattern Pattern { get; set; }



        public List<ValuePropositionEntry>? ValuePropositionEntries { get; set; }

        public List<RevenueStreamEntry>? RevenueStreamEntries { get; set; }
        public List<KeyResourceEntry>? KeyResourceEntries { get; set; }

        public List<KeyPartnerEntry>? KeyPartnerEntries { get; set; }
        public List<KeyActivietyEntry>? ValuePropositions { get; set; }
        public List<CustomerSegmentEntry>? CustomerSegmentEntries { get; set; }
        public List<CustomerRelationshipEntry>? CustomerRelationshipEntries { get; set; }
        public List<CostStructureEntry>? CostStructureEntries { get; set; }
        public List<ChannelEntry>? ChannelEntries { get; set; }

    }
}
