'use strict';
/* globals $, window */

$(document).ready(function() {
	$(window).on('action:topic.loaded', function() {
		// Reduce post by 5% opacity for each downvote received
		var	posts = $('.posts li[data-pid] .post-header, .posts li[data-pid] .content'),
			rep, opacity;

		posts.each(function(idx, postEl) {
			rep = parseInt($(postEl).parents('li').find('[data-votes]').attr('data-votes'), 10);

			if (rep < 0) {
				opacity = 1 + (rep*0.20);
				if (opacity < 0.1) {
					opacity = 0.1;
				}

				$(postEl).css('opacity', opacity);
			}
		});
	});
});