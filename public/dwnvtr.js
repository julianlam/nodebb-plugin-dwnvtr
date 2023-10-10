'use strict';
/* globals $, window */

$(document).ready(function() {
	$(window).on('action:topic.loaded action:posts.loaded', function() {
		// Reduce post by 5% opacity for each downvote received, skip deleted posts
		const posts = $('[component="topic"] [component="post"]:not(.deleted)');

		posts.each(function(idx, el) {
			const postEl = $(el);
			const rep = parseInt(postEl.find('[data-votes]').attr('data-votes'), 10);

			if (rep < 0) {
				const opacity = Math.max(0.1, 1 + (rep * 0.2));
				postEl.find('.post-header').css('opacity', opacity);
				postEl.find('.content').css('opacity', opacity);
			}
		});
	});
});